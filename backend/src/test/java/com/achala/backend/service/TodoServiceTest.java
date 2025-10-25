package com.achala.backend.service;

import com.achala.backend.dto.TodoDto;
import com.achala.backend.exception.TodoNotFoundException;
import com.achala.backend.model.TodoModel;
import com.achala.backend.repository.TodoRepository;
import com.achala.backend.util.TodoMapper;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.*;

public class TodoServiceTest {

    @Mock
    private TodoRepository todoRepository;

    @Mock
    private TodoMapper todoMapper;

    @InjectMocks
    private TodoService todoService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void addTodo_shouldSaveTodoAndReturnSuccessMessage() {

        TodoDto todoDto = TodoDto.builder()
                .title("test")
                .description("test")
                .build();
        TodoModel todoModel = new TodoModel(1, "test", "test", LocalDateTime.now());

        when(todoMapper.mapToTodoModel(todoDto)).thenReturn(todoModel);

        String result = todoService.addTodo(todoDto);

        verify(todoRepository, times(1)).save(todoModel);
        assertEquals("Todo Created Successfully!", result);
    }

    @Test
    void getTodos_shouldReturnListOfTodoDtos() {
        TodoDto todoDto = TodoDto.builder()
                .title("test")
                .description("test")
                .build();
        TodoModel todoModel = new TodoModel(1, "test", "test", LocalDateTime.now());

        Page<TodoModel> mockPage = new PageImpl<>(List.of(todoModel));

        when(todoRepository.findAll(any(PageRequest.class))).thenReturn(mockPage);
        when(todoMapper.mapToTodoDto(todoModel)).thenReturn(todoDto);

        List<TodoDto> result = todoService.getTodos();

        assertEquals(1,result.size());
        verify(todoRepository, times(1)).findAll(any(PageRequest.class));
    }

    @Test
    void completeTodo_shouldDeleteTodoAndReturnsAMessage() {
        Integer id = 1;
        TodoModel todoModel = new TodoModel(1, "test", "test", LocalDateTime.now());

        when(todoRepository.findById(id)).thenReturn(Optional.of(todoModel));

        String result = todoService.completeTodo(id);

        verify(todoRepository, times(1)).deleteById(id);
        assertEquals("Todo Deleted Successfully!", result);
    }

    @Test
    void completeTodo_ShouldThrowsAnExceptionWhenNotFound() {
        Integer id = 1;

        when(todoRepository.findById(id)).thenReturn(Optional.empty());

        TodoNotFoundException exception = assertThrows(TodoNotFoundException.class, ()->todoService.completeTodo(id));

        assertEquals("Todo with ID: 1 not found!", exception.getMessage());
        verify(todoRepository, never()).deleteById(anyInt());
    }
}
