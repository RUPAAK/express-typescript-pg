import { Request, Response } from "express";
import { PostEntity } from "../../entities/post";
import { BadRequestError } from "../../exception/Errors/bad-request-error";

export class Post {
  // post: Post;

  // constructor() {
  //   this.post = new Post();
  // }
  public static async getPosts(req: Request, res: Response) {
    try {
      const post = await PostEntity.findOne({
        where: {
          name: "Rupak",
        },
      });
      if (post) {
        res.send({
          data: [post],
        });
      }
      const createPost = await PostEntity.create({ name: "Rupak" }).save();
      const posts = await PostEntity.find();

      res.send(posts);
    } catch (error) {
      console.log(error);
      throw new BadRequestError("Failed");
    }
  }
}
