import Layout from "./Layout";

function Login() {

    return (
        <>


            <div className="container shadow-sm p-3 mb-5 bg-body rounded ">


                <div className="row  justify-content-center">
                    <div className="col-6 bg-light shadow p-3 mb-5 bg-body rounded">
                        <div style={{padding: '50px 50px 50px 50px'}}>
                            <img src={require('../images/logo-cc.png')} width={400} height={200} ></img>
                            <form>

                                <div class="form-outline mb-4 mt-5">
                                    <input type="email" id="form2Example1" class="form-control" />
                                    <label class="form-label" for="form2Example1">Email address</label>
                                </div>


                                <div class="form-outline mb-4">
                                    <input type="password" id="form2Example2" class="form-control" />
                                    <label class="form-label" for="form2Example2">Password</label>
                                </div>


                                <div class="row mb-4">
                                    <div class="col d-flex justify-content-center">

                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                                            <label class="form-check-label" for="form2Example31"> Remember me </label>
                                        </div>
                                    </div>

                                    <div class="col">

                                        <a href="#!">Forgot password?</a>
                                    </div>
                                    <button type="button" class="btn btn-primary btn-block mb-4 mt-5">Sign in</button>
                                </div>





                                <div class="text-center">
                                    <p>Not a member? <a href="#!">Register</a></p>
                                    <p>or sign up with:</p>
                                    <button type="button" class="btn btn-link btn-floating mx-1">
                                        <i class="fab fa-facebook-f"></i>
                                    </button>

                                    <button type="button" class="btn btn-link btn-floating mx-1">
                                        <i class="fab fa-google"></i>
                                    </button>

                                    <button type="button" class="btn btn-link btn-floating mx-1">
                                        <i class="fab fa-twitter"></i>
                                    </button>

                                    <button type="button" class="btn btn-link btn-floating mx-1">
                                        <i class="fab fa-github"></i>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
export default Login;