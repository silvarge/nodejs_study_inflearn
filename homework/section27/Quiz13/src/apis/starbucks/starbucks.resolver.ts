import { Args, Query, Resolver } from '@nestjs/graphql';
import { StarbucksService } from './starbucks.service';

@Resolver()
export class StarbucksResolver {
  constructor(private readonly starbucksService: StarbucksService) {}

  @Query(() => String, { nullable: true })
  fetchStarbucks(): string {
    return this.starbucksService.getFetchCoffee();
  }

  @Mutation(() => String, { nullable: true })
  createStarbucks(
    @Args('createStarbucksInput') createStarbucksInput: CreateStarbucksInput,
  ): string {
    return this.starbucksService.create({ createStarbucksInput });
  }
}
