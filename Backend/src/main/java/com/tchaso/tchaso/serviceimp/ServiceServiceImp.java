package com.tchaso.tchaso.serviceimp;

import com.tchaso.tchaso.models.FileUploadUtil;
import com.tchaso.tchaso.models.Service;
import com.tchaso.tchaso.repository.ServiceRepository;
import com.tchaso.tchaso.services.ServiceService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

@org.springframework.stereotype.Service
@Slf4j
public class ServiceServiceImp implements ServiceService {

    ServiceRepository serviceRepository;

    @Autowired
    public ServiceServiceImp(ServiceRepository serviceRepository){
        this.serviceRepository = serviceRepository;
    }



    @Override
    public Service add_service(Service service,
                               @RequestParam("image") MultipartFile multipartFilePhoto) throws IOException {
        String fileNamePhoto = StringUtils.cleanPath(multipartFilePhoto.getOriginalFilename());
        service.setIcone(fileNamePhoto);
        Service serv = serviceRepository.save(service);
        String uploadDirPhoto = "src/main/resources/iconservice/icon" + serv.getId();
        FileUploadUtil.saveFile(uploadDirPhoto, fileNamePhoto, multipartFilePhoto);
        return serv;
    }

    @Override
    public Service update_service(Integer Id, Service service) {
        Service serv = serviceRepository.findById(Id).get();
        serv.setDescription(service.getDescription());
        serv.setNomser(service.getNomser());
        serv.setIcone(service.getIcone());
        serv.setEtat(service.getEtat());
        serv.setAdministrateur(service.getAdministrateur());
        return serviceRepository.save(serv);
    }

    @Override
    public List<Service> list_service()
    {
        return serviceRepository.findAll();
    }

    @Override
    public Service afficher_service_by_id(Integer Id) {
        if (Id == null ){
            log.error("Service id est null");
            return null;
        }
        return serviceRepository.findById(Id).get();
    }

    @Override
    public void delete_service(Integer Id) {
        if (Id == null ){
            log.error("Service id est null");
            return ;
        }
        serviceRepository.delete_service(Id);
    }

    @Override
    public byte[] getIcon(@PathVariable(name="id") Integer id) throws IOException {
        Service serv = serviceRepository.findById(id).get();
        String iconName = serv.getIcone();
        File file = new File("src/main/resources/iconservice/icon"+ serv.getId() +"/" +iconName);
        Path path = Paths.get(file.toURI());
        return Files.readAllBytes(path);
    }


}
