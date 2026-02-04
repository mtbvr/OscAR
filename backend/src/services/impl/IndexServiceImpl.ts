import { AppError } from "../../common-lib/errors/AppError";
import { IndexService } from "../IndexService";
import { IndexRepository } from "../../common-lib/repositories/IndexRepository";
import { CreateIndexRequestDTO } from "../../common-lib/dto/index/CreateIndexRequestDTO";
import { CreateIndexResponseDTO } from "../../common-lib/dto/index/CreateIndexResponseDTO";
import { indexMapper } from "../../mapper/IndexMapper";

const indexRepository = new IndexRepository();

export class IndexServiceImpl implements IndexService {

    async createIndex(indexData: CreateIndexRequestDTO): Promise<CreateIndexResponseDTO> {
        try {
            const index = await indexRepository.create(indexData);
            const indexDTO = indexMapper.toCreateResponseDto(index);
            return indexDTO;
        } catch (error: any) {
            throw new AppError({
                userMessage: 'Erreur lors de la création de l\'index',
                statusCode: 500,
            });
        }
    }
}