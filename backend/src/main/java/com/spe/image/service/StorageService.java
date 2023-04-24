package com.spe.image.service;

import com.spe.image.entity.ImageData;
import com.spe.image.repository.StorageRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;


@Service
public class StorageService {

    @Autowired
    private StorageRepository repository;
    public ImageData addImage(ImageData imageData){
        return repository.save(imageData);
    }
    public Optional<ImageData> findImageByFileName(String fileName){
        return repository.findByFileName(fileName);
    }
}
