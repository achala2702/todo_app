package com.achala.backend.repository;

import com.achala.backend.model.TodoModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TodoRepository extends JpaRepository<TodoModel, Integer> {
}
