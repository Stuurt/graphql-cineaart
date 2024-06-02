import { Field, ID, ObjectType } from "type-graphql";


@ObjectType()
export class Movie {

    @Field(_type => ID)
    id: string;

    @Field()
    name: string;
}