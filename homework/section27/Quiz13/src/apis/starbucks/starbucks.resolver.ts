import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { StarbucksService } from './starbucks.service';
import { CreateStarbucksInput } from './dtos/create-starbucks.input';
import { Starbucks } from './entities/starbucks.entity';

@Resolver()
export class StarbucksResolver {
  constructor(private readonly starbucksService: StarbucksService) {}

  @Query(() => [Starbucks], { nullable: true })
  fetchStarbucks(): Starbucks[] {
    return this.starbucksService.getFetchCoffee();
  }

  @Mutation(() => String, { nullable: true })
  createStarbucks(
    @Args('createStarbucksInput') createStarbucksInput: CreateStarbucksInput,
  ): string {
    return this.starbucksService.create({ createStarbucksInput });
  }
}
