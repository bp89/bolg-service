package com.bolger.e2e.codec;

import org.bson.BsonReader;
import org.bson.BsonWriter;
import org.bson.codecs.Codec;
import org.bson.codecs.DecoderContext;
import org.bson.codecs.EncoderContext;

import java.time.Instant;

public class InstantCodec implements Codec<Instant>
{
    @Override
    public void encode(BsonWriter writer, Instant value, EncoderContext encoderContext) {
        writer.writeDateTime(value.toEpochMilli());
    }

    public Instant decode(BsonReader reader, DecoderContext decoderContext) {
        return Instant.ofEpochMilli(reader.readDateTime());
    }

    @Override
    public Class<Instant> getEncoderClass() {
        return Instant.class;
    }
}
