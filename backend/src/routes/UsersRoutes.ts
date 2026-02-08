import { Router } from "express";
import { UsersController } from "../controllers/UsersController.js";
import { authMiddleware, requireRole } from "../common-lib/middlewares/AuthMiddleware.js";
import { RoleEnum } from "../common-lib/enum/roleEnum.js";



const usersRoutes = Router();

const usersController = new UsersController();

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Récupérer tous les utilisateurs
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     description: >
 *       Rôles autorisés : ADMIN
 *     responses:
 *       200:
 *         description: Liste des utilisateurs
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: "#/components/schemas/LightUserDTO"
 */
usersRoutes.get(
    "/users",
    authMiddleware, 
    requireRole([RoleEnum.ADMIN]),
    (req, res, next) => usersController.getAll(req, res, next)
);

/**
 * @swagger
 * /users/web:
 *   post:
 *     summary: Créer un nouvel utilisateur (web)
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/UserCreateRequestDTO"
 *     responses:
 *       201:
 *         description: Utilisateur créé avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/UserCreateResponseDTO"
 */
usersRoutes.post(
    "/users/web", 
    (req, res, next) => usersController.createUser(req, res, next)
);

/** 
 * @swagger
 * /users/culturalcenter/{culturalcenterId}:
 *   get:
 *     summary: Récupérer les hunt managers d'un centre culturel
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     description: >
 *       Rôles autorisés : CULTURAL_CENTER_MANAGER, ADMIN 
 *     parameters:
 *       - in: path
 *         name: culturalcenter_id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Liste des utilisateurs
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: "#/components/schemas/LightUserDTO"
 */
usersRoutes.get(
    "/users/culturalcenter/:culturalcenter_id",
    authMiddleware,
    requireRole([RoleEnum.CULTURAL_CENTER_MANAGER, RoleEnum.ADMIN]),
    (req, res, next) => usersController.getByCenterCultural(req, res, next)
)
export default usersRoutes;