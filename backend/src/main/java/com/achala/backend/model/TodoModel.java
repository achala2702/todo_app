package com.achala.backend.model;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

@Entity
@Table(name = "todo_table", indexes = {@Index(name="idx_created_at", columnList = "created_at")})
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Builder
public class TodoModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(nullable = false)
    private String title;
    private String description;
    @CreationTimestamp
    private LocalDateTime createdAt;
}
