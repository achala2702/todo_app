package com.achala.backend.controller;

import com.achala.backend.dto.TodoDto;
import com.achala.backend.service.TodoService;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/todo")
@RequiredArgsConstructor
public class TodoController {

    private final TodoService todoService;

    @PostMapping
    public ResponseEntity<String> addTodo(@Valid @RequestBody TodoDto todoDto) {
        return ResponseEntity.status(HttpStatus.CREATED).body(todoService.addTodo(todoDto));
    }

    @GetMapping
    public ResponseEntity<List<TodoDto>> getTodos() {
        return ResponseEntity.status(HttpStatus.OK).body(todoService.getTodos());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> completeTodo(@PathVariable Integer id) {
        return ResponseEntity.status(HttpStatus.OK).body(todoService.completeTodo(id));
    }

}
