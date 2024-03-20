import { Field, InputType } from '@nestjs/graphql';

// 출력하는 값은 ObjectType
@InputType() // 입력값으로 들어오는 값은 InputType
export class CreateBoardInput {
  @Field(() => String)
  writer: string;

  @Field(() => String)
  title: string;

  @Field(() => String)
  contents: string;
}
