function CustommerConfig() {

    return (
        <>
            <Layout header={'Formsale'}>

                <div class="text-center">
                    <div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
                <div className="border mt-5 shadow-sm p-3 mb-5 bg-body rounded">
                    <p className="ms-2">นัดหมาย</p>
                    <div className="w-75 ms-5">


                        <div class="form-group row mb-3">
                            <label for="inputEmail3" class="col-sm-2 col-form-label" value={EventTarget}>วันที่</label>
                            <div class="col-sm-10">
                                <input type="text" onChange={(e) => setem(e.target.value)} class="form-control" id="inputEmail3" placeholder="DD/MM/YYYY" required></input>
                            </div>
                        </div>


                        <div class="form-group row mb-3">

                        </div>
                    </div>
                </div>

                <div className="border mt-5 shadow-sm p-3 mb-5 bg-body rounded">
                    <p className="ms-2">ยืนยันตัวตน</p>
                    <div className="w-75 ms-5">

                        <div class="form-group row mb-3">
                            <label for="inputEmail3" onChange={(e) => setconfig(e.target.value)} class="col-sm-2 col-form-label">รหัสยืนยัน</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="inputEmail3" placeholder="Password" required></input>
                            </div>

                        </div>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary">กดส่งคำสั่งซื้อ</button>
                <div class="form-group row mt-3">

                    <div class="col-sm-10">

                    </div>
                </div>

            </Layout>
        </>

    )
}