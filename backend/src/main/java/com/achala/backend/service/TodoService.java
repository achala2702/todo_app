package com.achala.backend.service;

import com.achala.backend.dto.TodoDto;
import com.achala.backend.exception.TodoNotFoundException;
import com.achala.backend.model.TodoModel;
import com.achala.backend.repository.TodoRepository;
import com.achala.backend.util.TodoMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TodoService {

    private final TodoRepository todoRepository;
    private final TodoMapper todoMapper;

    public String addTodo(TodoDto todoDto) {
        TodoModel todo = todoMapper.mapToTodoModel(todoDto);
        todoRepository.save(todo);
        return "Todo Created Successfully!";
    }

    public List<TodoDto> getTodos() {
        List<TodoModel> todos = todoRepository.findAll(PageRequest.of(0,5, Sort.by(Sort.Direction.DESC, "createdAt"))).getContent();
        return todos.stream()
                .map(todo->todoMapper.mapToTodoDto(todo))
                .toList();
    }

    @Transactional
    public String completeTodo(Integer id) {

        todoRepository.findById(id).orElseThrow(()->new TodoNotFoundException("Todo with ID: " + id + " not found!"));
        todoRepository.deleteById(id);

        return "Todo Deleted Successfully!";
    }
}
