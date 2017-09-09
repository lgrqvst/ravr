class Landingpad {
  constructor(x) {
    this.x = x;
    this.apparentX = x + 75 * Math.round((VW / 2 - x) / (VW / 2) * 1000) / 1000;
  }

  draw(ctx, plx) {
    // MAIN BODY

    this.apparentX = this.x + plx * 1.75;
    let x = this.apparentX;

    ctx.beginPath();

    ctx.moveTo(x, VH - 100);

    ctx.bezierCurveTo(
      x - 3,
      VH - 100,
      x - 3,
      VH - 75,
      x - 3,
      VH
    );

    ctx.lineTo(x - 5, VH);

    ctx.bezierCurveTo(
      x - 5,
      VH - 100,
      x - 5,
      VH - 150,
      x - 50,
      VH - 150
    );

    ctx.lineTo(x - 50, VH - 153);

    ctx.lineTo(x - 40, VH - 159);

    ctx.lineTo(x - 40, VH - 162);

    // Right side mirrored

    ctx.lineTo(x + 40, VH - 162);

    ctx.lineTo(x + 40, VH - 159);

    ctx.lineTo(x + 50, VH - 153);

    ctx.lineTo(x + 50, VH - 150);

    ctx.bezierCurveTo(
      x + 5,
      VH - 150,
      x + 5,
      VH - 100,
      x + 5,
      VH
    );

    ctx.lineTo(x + 3, VH);

    ctx.bezierCurveTo(
      x + 3,
      VH - 75,
      x + 3,
      VH - 100,
      x,
      VH - 100
    );

    ctx.fillStyle = 'rgba(180,180,180,1)';
    ctx.fill();

    // Details

    ctx.beginPath();
    ctx.moveTo(x - 40, VH - 159);
    ctx.lineTo(x + 40, VH - 159);
    ctx.strokeStyle = 'rgba(0,0,0,0.25)';
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(x - 50, VH - 153);
    ctx.lineTo(x + 50, VH - 153);
    ctx.strokeStyle = 'rgba(0,0,0,0.5)';
    ctx.stroke();

    // Shadow underneath

    ctx.globalCompositeOperation = 'source-atop';
    ctx.beginPath()
    ctx.moveTo(x - 50, VH - 150);
    ctx.lineTo(x + 50, VH - 150);
    ctx.lineTo(x + 50, VH - 50);
    ctx.fillStyle = 'rgba(120,120,120,1)';
    ctx.fill();
    ctx.globalCompositeOperation = 'source-over';

    // ctx.beginPath();
    //
    // ctx.moveTo(this.x, VH - 100);
    //
    // ctx.bezierCurveTo(
    //   this.x - 3,
    //   VH - 100,
    //   this.x - 3,
    //   VH - 75,
    //   this.x - 3,
    //   VH
    // );
    //
    // ctx.lineTo(this.x - 5, VH);
    //
    // ctx.bezierCurveTo(
    //   this.x - 5,
    //   VH - 100,
    //   this.x - 5,
    //   VH - 150,
    //   this.x - 50,
    //   VH - 150
    // );
    //
    // ctx.lineTo(this.x - 50, VH - 153);
    //
    // ctx.lineTo(this.x - 40, VH - 159);
    //
    // ctx.lineTo(this.x - 40, VH - 162);
    //
    // // Right side mirrored
    //
    // ctx.lineTo(this.x + 40, VH - 162);
    //
    // ctx.lineTo(this.x + 40, VH - 159);
    //
    // ctx.lineTo(this.x + 50, VH - 153);
    //
    // ctx.lineTo(this.x + 50, VH - 150);
    //
    // ctx.bezierCurveTo(
    //   this.x + 5,
    //   VH - 150,
    //   this.x + 5,
    //   VH - 100,
    //   this.x + 5,
    //   VH
    // );
    //
    // ctx.lineTo(this.x + 3, VH);
    //
    // ctx.bezierCurveTo(
    //   this.x + 3,
    //   VH - 75,
    //   this.x + 3,
    //   VH - 100,
    //   this.x,
    //   VH - 100
    // );
    //
    // ctx.fillStyle = 'rgba(180,180,180,1)';
    // ctx.fill();
    //
    // // Details
    //
    // ctx.beginPath();
    // ctx.moveTo(this.x - 40, VH - 159);
    // ctx.lineTo(this.x + 40, VH - 159);
    // ctx.strokeStyle = 'rgba(0,0,0,0.25)';
    // ctx.stroke();
    //
    // ctx.beginPath();
    // ctx.moveTo(this.x - 50, VH - 153);
    // ctx.lineTo(this.x + 50, VH - 153);
    // ctx.strokeStyle = 'rgba(0,0,0,0.5)';
    // ctx.stroke();
    //
    // // Shadow underneath
    //
    // ctx.globalCompositeOperation = 'source-atop';
    // ctx.beginPath()
    // ctx.moveTo(this.x - 50, VH - 150);
    // ctx.lineTo(this.x + 50, VH - 150);
    // ctx.lineTo(this.x + 50, VH - 50);
    // ctx.fillStyle = 'rgba(120,120,120,1)';
    // ctx.fill();
    // ctx.globalCompositeOperation = 'source-over';
  }
}