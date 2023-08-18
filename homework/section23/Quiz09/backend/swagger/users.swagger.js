
/**
 * @swagger
 * /users:
 *  get:
 *      summary: 회원 리스트 가져오기
 *      description: 회원 목록 조회
 *      tags: [Users]
 *      responses:
 *          200:
 *              description: 성공
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              properties:
 *                                  email:
 *                                      type: string
 *                                      example: aaa@gmail.com
 *                                  name:
 *                                      type: string
 *                                      example: 김철수
 *                                  phone:
 *                                      type: string
 *                                      example: 010-0000-0000
 *                                  personal:
 *                                      type: string
 *                                      example: 000000-0000000
 *                                  prefer:
 *                                      type: string
 *                                      example: https://google.com
 */