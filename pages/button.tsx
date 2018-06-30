import * as React from 'react';
import { buildTheme } from '../src/';
import { ThemeProvider } from 'styled-components';
import { Button, Base, Icons, injectGlobalStyle } from '../src';
const theme = buildTheme();
injectGlobalStyle();
export default () => (
    <ThemeProvider theme={theme}  >
        <Base width="content" align="center">
            <div>
                <Button.BaseButton size="small" variant="flat" contents="text" >small</Button.BaseButton>
                <Button.BaseButton size="medium" variant="flat" contents="text" >medium</Button.BaseButton>
                <Button.BaseButton size="large" variant="flat" contents="text">large</Button.BaseButton>
                <Button.BaseButton size="largeX" variant="flat" contents="text">largeX</Button.BaseButton>
            </div>
            <div>
                <Button.BaseButton size="small" variant="raised" contents="text">small</Button.BaseButton>
                <Button.BaseButton size="medium" variant="raised" contents="text">small</Button.BaseButton>
                <Button.BaseButton size="large" variant="raised" contents="text">small</Button.BaseButton>
                <Button.BaseButton size="largeX" variant="raised" contents="text">small</Button.BaseButton>
            </div>
            <div>
                <Button.BaseButton size="large" variant="raised" bgColor="main" >add</Button.BaseButton>
                <Button.BaseButton size="large" variant="raised" bgColor="main">modify</Button.BaseButton>
                <Button.BaseButton size="large" variant="raised" bgColor="main">delete</Button.BaseButton>
                <Button.BaseButton size="large" variant="raised" bgColor="main">view</Button.BaseButton>
            </div>
            <div>
                <Button.BaseButton size="large" variant="flat" color="main" >add</Button.BaseButton>
                <Button.BaseButton size="large" variant="flat" color="main">modify</Button.BaseButton>
                <Button.BaseButton size="large" variant="flat" color="main">delete</Button.BaseButton>
                <Button.BaseButton size="large" variant="flat" color="main">view</Button.BaseButton>
            </div>
            <div>
                <Button.BaseButton border='bordered' size="large" variant="flat" color="main" >add</Button.BaseButton>
                <Button.BaseButton border='bordered' size="large" variant="flat" color="main">modify</Button.BaseButton>
                <Button.BaseButton border='bordered' size="large" variant="flat" color="main">delete</Button.BaseButton>
                <Button.BaseButton border='bordered' size="large" variant="flat" color="main">view</Button.BaseButton>
            </div>
            <div>
                <Button.Button border='bordered' size="large" variant="flat" color="main" text="add" ></Button.Button>
                <Button.Button border='bordered' size="large" variant="flat" color="main" text="add" icon={Icons.ArrowForward}></Button.Button>
                <Button.BaseButton border='bordered' size="large" variant="flat" color="main">modify</Button.BaseButton>
                <Button.BaseButton border='bordered' size="large" variant="flat" color="main">delete</Button.BaseButton>
                <Button.BaseButton border='bordered' size="large" variant="flat" color="main">view</Button.BaseButton>
            </div>
            <div>
                <Button.Button border='bordered' size="large" variant="flat" color="main" text="add" icon={Icons.ArrowForward}>></Button.Button>
                <Button.Button border='bordered' size="large" variant="flat" color="main" text="modify" icon={Icons.ArrowForward}></Button.Button>
            </div>
            <div>
                <Button.Button border='bordered' iconRight size="large" variant="flat" color="main" text="add" icon={Icons.ArrowForward}>></Button.Button>
                <Button.Button border='bordered' iconRight size="large" variant="flat" color="main" text="modify" icon={Icons.ArrowForward}></Button.Button>
            </div>

            <div>
                <Button.Button border='bordered' size="large" variant="flat" color="main" icon={Icons.ArrowForward}>></Button.Button>
                <Button.Button border='bordered' size="large" variant="flat" color="main" icon={Icons.ArrowForward}></Button.Button>
            </div>
            <div>
                <Button.Button color="main" text="main"></Button.Button>
                <Button.Button color="accent" text="accent"></Button.Button>
                <Button.Button text="primary"></Button.Button>
                <Button.Button text="primary" href="http://bing.com"></Button.Button>
            </div>
            <div>
                <Button.Button color="main" text="main"></Button.Button>
                <Button.Button color="accent" text="accent"></Button.Button>
                <Button.Button text="primary"></Button.Button>
                <Button.Button text="link" href="http://bing.com"></Button.Button>
                <Button.Button text="disabled" disabled ></Button.Button>
            </div>
            <div>
                <Button.Button color="main" text="main" border='bordered'></Button.Button>
                <Button.Button color="accent" text="accent" border='bordered'></Button.Button>
                <Button.Button text="primary" border='bordered'></Button.Button>
                <Button.Button text="primary" href="http://bing.com" border='bordered'></Button.Button>
            </div>
            <div>
                <Button.Button color="main" text="main" variant='raised'></Button.Button>
                <Button.Button color="accent" text="accent" variant='raised'></Button.Button>
                <Button.Button text="primary" variant='raised'></Button.Button>
                <Button.Button text="primary" href="http://bing.com" variant='raised'></Button.Button>
                <Button.Button text="disabled" disabled variant='raised'></Button.Button>
            </div>
            <div>
                <Button.Button color="main" icon={Icons.ArrowForward} rounded ></Button.Button>
                <Button.Button color="accent" icon={Icons.ArrowForward} rounded ></Button.Button>
                <Button.Button icon={Icons.ArrowForward} rounded ></Button.Button>
                <Button.Button icon={Icons.ArrowForward} rounded href="http://bing.com" ></Button.Button>
                <Button.Button icon={Icons.ArrowForward} rounded disabled ></Button.Button>
            </div>
            <div>
                <Button.Button color="main" icon={Icons.ArrowForward} rounded variant='raised'></Button.Button>
                <Button.Button color="accent" icon={Icons.ArrowForward} rounded variant='raised'></Button.Button>
                <Button.Button icon={Icons.ArrowForward} rounded variant='raised'></Button.Button>
                <Button.Button icon={Icons.ArrowForward} rounded href="http://bing.com" variant='raised'></Button.Button>
                <Button.Button icon={Icons.ArrowForward} rounded disabled variant='raised'></Button.Button>
            </div>
        </Base>
    </ ThemeProvider >
);
