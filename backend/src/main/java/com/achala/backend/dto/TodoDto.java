package com.achala.backend.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Builder;

@Builder
public record TodoDto(
        Integer id,
        @NotBlank
        String title,
        String description
) {
}
