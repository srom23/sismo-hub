import { IGraphQLProvider } from "@group-generators/helpers/data-providers/graphql/types";
import { FetchedData } from "topics/group";

export type QueryVotersOutput = { votes: { voter: string }[] };

export type QuerySpaceVotersInput = { space: string };

export type QueryProposalVotersInput = { proposal: string };

export type QueryAllVotersInput =
  | QuerySpaceVotersInput
  | QueryProposalVotersInput;

export type QueryProposalVotersCountOutput = { proposal: { votes: number } };

export type QuerySpaceVotersCountOutput = { space: { followersCount: number } };

export interface ISnapshotProvider extends IGraphQLProvider {
  queryAllVoters(input: QueryAllVotersInput): Promise<FetchedData>;
}
