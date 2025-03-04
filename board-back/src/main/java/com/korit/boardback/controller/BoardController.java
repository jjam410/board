package com.korit.boardback.controller;

import com.korit.boardback.dto.request.ReqWriteBoardDto;
import com.korit.boardback.security.principal.PrincipalUser;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/board")
public class BoardController {

    @PostMapping("/{category}")
    public ResponseEntity<?> createBoard(
            @PathVariable String category,
            @RequestBody ReqWriteBoardDto dto,
            @AuthenticationPrincipal PrincipalUser principalUser
            ) {

        return ResponseEntity.ok().build();
    }

}
