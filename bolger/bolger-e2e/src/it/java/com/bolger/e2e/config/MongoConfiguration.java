package com.bolger.e2e.config;

import com.bolger.e2e.codec.InstantCodec;
import com.mongodb.MongoClient;
import com.mongodb.MongoClientOptions;
import com.mongodb.MongoCredential;
import com.mongodb.ServerAddress;
import com.mongodb.client.MongoDatabase;
import org.bson.UuidRepresentation;
import org.bson.codecs.DocumentCodecProvider;
import org.bson.codecs.UuidCodec;
import org.bson.codecs.configuration.CodecRegistries;
import org.bson.codecs.configuration.CodecRegistry;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.data.mongo.MongoDataAutoConfiguration;
import org.springframework.boot.autoconfigure.mongo.MongoAutoConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.Arrays;

@EnableAutoConfiguration(exclude = {MongoAutoConfiguration.class, MongoDataAutoConfiguration.class})
@Configuration
public class MongoConfiguration {

    @Autowired
    private MongoConfigProps mongoConfigProps;

    @Bean
    public MongoDatabase mongoDatabase() {
        MongoCredential mongoCredential = MongoCredential.createCredential(
                mongoConfigProps.getUsername(),
                mongoConfigProps.getDatabaseName(),
                mongoConfigProps.getPassword().toCharArray()
        );
        ServerAddress serverAddress = new ServerAddress(
                mongoConfigProps.getHost(),
                mongoConfigProps.getPort()
        );
        CodecRegistry uuidRegistry = CodecRegistries.fromCodecs(new UuidCodec(UuidRepresentation.STANDARD));
        CodecRegistry instantRegistry = CodecRegistries.fromCodecs(new InstantCodec());
        CodecRegistry documentRegistry = CodecRegistries.fromProviders(new DocumentCodecProvider());
        CodecRegistry codecRegistry = CodecRegistries.fromRegistries(uuidRegistry,
                instantRegistry, documentRegistry, MongoClient.getDefaultCodecRegistry());

        MongoClientOptions.Builder mongoClientOptions = MongoClientOptions.builder();

        mongoClientOptions.codecRegistry(codecRegistry);

        MongoClient mongoClient = new MongoClient(serverAddress, Arrays.asList(mongoCredential), mongoClientOptions.build());

        return mongoClient.getDatabase(mongoConfigProps.getDatabaseName());
    }
}
