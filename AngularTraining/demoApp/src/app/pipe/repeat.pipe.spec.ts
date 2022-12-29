import { RepeatDataPipe } from "./repeat.pipe";




describe('RepeatDataPipe', () => {

 

  it('create an instance', () => {

    const pipe = new RepeatDataPipe();

    expect(pipe).toBeTruthy();

  });



  it('testing repeat pipe', () => {

    const pipe = new RepeatDataPipe();

    const data = pipe.transform("vansh",1);

    expect(data).toEqual("vansh vansh");

  });



});