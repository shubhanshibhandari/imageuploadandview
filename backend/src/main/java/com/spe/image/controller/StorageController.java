package com.spe.image.controller;

import com.spe.image.entity.ImageData;
import com.spe.image.service.StorageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class StorageController {
    @Autowired
    private StorageService service;

    @PostMapping("/addImage")
    public ResponseEntity<?> uploadImage(@RequestBody ImageData imageData)  {
        String uploadImage = String.valueOf(service.addImage(imageData));
        return ResponseEntity.status(HttpStatus.OK)
                .body(uploadImage);
    }

    @PostMapping("/{fileName}")
    public ResponseEntity<?> downloadImage(@PathVariable String fileName){
        Optional<ImageData> imageData=service.findImageByFileName(fileName);
        return ResponseEntity.status(HttpStatus.OK)
                .body(imageData);

    }
}
