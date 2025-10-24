package com.achala.backend.util;

import com.achala.backend.dto.TodoDto;
import com.achala.backend.model.TodoModel;
import org.springframework.stereotype.Component;

@Component
public class TodoMapper {

    public TodoModel mapToTodoModel(TodoDto todoDto) {
        return TodoModel.builder()
                .title(todoDto.title())
                .description(todoDto.description())
                .build();
    }

    public TodoDto mapToTodoDto(TodoModel todoModel) {
        return TodoDto.builder()
                .id(todoModel.getId())
                .title(todoModel.getTitle())
                .description(todoModel.getDescription())
                .build();
    }
}
