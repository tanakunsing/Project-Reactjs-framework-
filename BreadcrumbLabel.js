import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Stytled from './Layout.module.css';
import Css from './Layoutst.module.css'

function BreadcrumbLabel({ header }) {
    return (
        <>
            {
                header !== 'HOME' &&
                header !== 'MainProduct' &&
                <div className={`container ${Css.sizeScr}`}>
                    <div className='row' >
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb" style={{margin:'0'}}>
                                <li class="breadcrumb-item"><div className={Stytled.ItemBreadcrumb}><a href="#">CoolClean</a></div></li>
                                <li class="breadcrumb-item"><a href="#" style={{textDecoration:'none'}}>{header}</a></li>
                                <li class="breadcrumb-item active" aria-current="page">{header}</li>
                            </ol>
                            <span className={Stytled.Breadcrumb_font}>{header}</span>
                        </nav>

                        {/*
                    <Breadcrumb className={Stytled.Breadcrumb}>
                        <Breadcrumb.Item><div className={Stytled.Breadcrumb_in}><a href="#">CoolClean</a></div></Breadcrumb.Item>
                        <Breadcrumb.Item  href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                            {header}
                        </Breadcrumb.Item>
                        <Breadcrumb.Item active>{header}</Breadcrumb.Item>
                    </Breadcrumb>
                    <span className={Stytled.Breadcrumb_font}>{header}</span>
            */}
                    </div>
                </div>

            }
            {
                header === 'MainProduct' &&
                <div className='container'>
                    <div className={`row ${Stytled.my_ss}`} >
                        <Breadcrumb className={Stytled.Breadcrumb}>
                            <Breadcrumb.Item className={Stytled.ItemBreadcrumb} href="#" >CoolClean</Breadcrumb.Item>
                            <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                                {header}
                            </Breadcrumb.Item>
                            <Breadcrumb.Item style={{ textDecoration: 'none' }} active>{header}</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                </div>
            }
        </>
    );
}

export default BreadcrumbLabel;


