package com.bolger.e2e;

import com.mongodb.client.MongoDatabase;
import lombok.extern.log4j.Log4j2;
import org.bson.Document;

import java.util.List;


@Log4j2
public class DBFacade {
    public static final String YOU_NEED_DOCUMENT_PROPS = "YouNeedDocumentProps";
    public static final String LEGAL_ENTITY = "LegalEntity";
    public static final String USER = "User";

    public static MongoDatabase mongoDatabase;

    public static void clear() {
        mongoDatabase.getCollection(YOU_NEED_DOCUMENT_PROPS).drop();
        mongoDatabase.getCollection(LEGAL_ENTITY).drop();
        clearUsers();
    }

    public static void clearUsers() {
        mongoDatabase.getCollection(USER).drop();
    }

    public static void insertDefaultUser(String emailId) {
        mongoDatabase.getCollection(USER).insertOne(new Document("emailId", emailId.toLowerCase()));
    }

    public static void insertDocuments(List<Document> docs, String collectionName) {
        mongoDatabase.getCollection(collectionName).insertMany(docs);
    }

    public static Document getFirst(String collection, Document query) {
        return mongoDatabase.getCollection(collection).find(query).first();
    }

    public static void findOneAndUpdate(Document criteria, Document document, String collectionName) {
        mongoDatabase.getCollection(collectionName).findOneAndUpdate(criteria, new Document("$set", document));
    }
}

