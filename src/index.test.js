import ErrorRepository from "./index";

test("test", ()=> {
    const error = new ErrorRepository();
    expect(error.translate(354)).toEqual("The connection is lost")
});

test("test", ()=> {
    const error = new ErrorRepository();
    expect(error.translate(200)).toEqual('Unknown error');
});