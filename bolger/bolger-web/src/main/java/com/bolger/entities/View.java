package com.bolger.entities;

import com.google.common.net.InetAddresses;
import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@Data
public class View {
    private InetAddresses inetAddresses;
}
