package com.tchaso.tchaso.services;

import com.tchaso.tchaso.models.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface ServiceService {

    public Service add_service(Service service, MultipartFile image) throws IOException;

    public Service update_service(Integer Id,Service service);

    public List<Service> list_service();

    public Service afficher_service_by_id(Integer Id);

    public void delete_service(Integer Id);

    public byte[] getIcon(Integer Id) throws IOException;

}
