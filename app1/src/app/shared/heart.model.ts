export class Heart {
  constructor(
    public full: boolean,
    public urlFullHeart: string = "/assets/fullheart.png",
    public urlEmptyHeart: string = "/assets/emptyheart.png") { }

    public getHeartType(): string {
      return this.full ? this.urlFullHeart : this.urlEmptyHeart
    }
}