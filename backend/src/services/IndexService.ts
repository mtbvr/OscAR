import { CreateIndexResponseDTO } from "../common-lib/dto/index/CreateIndexResponseDTO.js";
import { CreateIndexRequestDTO } from "../common-lib/dto/index/CreateIndexRequestDTO.js";

export interface IndexService {
  createIndex(indexData: CreateIndexRequestDTO): Promise<CreateIndexResponseDTO>;
}