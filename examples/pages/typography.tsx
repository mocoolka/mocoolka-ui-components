import * as React from 'react';
import {
    buildTheme, Typography, Base, injectGlobalStyle,App
} from '../../';
import { ThemeProvider } from 'styled-components';
injectGlobalStyle();
const { H1, H2, H3, H4, H5, H6,Subtitle1,Subtitle2,Body1,Body2,Caption,Overline } = Typography;
const theme = buildTheme();
export default () => (
    <App.App  title="Typegraphy">
        <App.Content width="content" align="center">
            <H1>Headline 1</H1>
            <H2>Headline 2</H2>
            <H3>Headline 3</H3>
            <H4>Headline 4</H4>
            <H5>Headline 5</H5>
            <H6>Headline 6</H6>
            <Subtitle1>Subtitle 1</Subtitle1>
            <Subtitle2>Subtitle 2</Subtitle2>
            <Body1>Body 1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                 Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                  neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti?
                   Eum quasi quidem quibusdam.</Body1>
            <Body2>Body 2. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate aliquid ad quas sunt voluptatum officia dolorum cumque,
                possimus nihil molestias sapiente necessitatibus dolor saepe inventore,
                 soluta id accusantium voluptas beatae.

            </Body2>
            <Caption>Caption text</Caption>
            <Overline>Overline text</Overline>

            <Body2 alignText="right">Body 2. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate aliquid ad quas sunt voluptatum officia dolorum cumque,
                possimus nihil molestias sapiente necessitatibus dolor saepe inventore,
                 soluta id accusantium voluptas beatae.
            </Body2>
            <Body2 alignText="center">Body 2. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate aliquid ad quas sunt voluptatum officia dolorum cumque,
                possimus nihil molestias sapiente necessitatibus dolor saepe inventore,
                 soluta id accusantium voluptas beatae.
            </Body2>
            <Body2 alignText="justify">Body 2. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate aliquid ad quas sunt voluptatum officia dolorum cumque,
                possimus nihil molestias sapiente necessitatibus dolor saepe inventore,
                 soluta id accusantium voluptas beatae.
            </Body2>

            <Body2 fontWeight="thin">Body 2. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate aliquid ad quas sunt voluptatum officia dolorum cumque,
                possimus nihil molestias sapiente necessitatibus dolor saepe inventore,
                 soluta id accusantium voluptas beatae.
            </Body2>
            <Body2 fontWeight="light">Body 2. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate aliquid ad quas sunt voluptatum officia dolorum cumque,
                possimus nihil molestias sapiente necessitatibus dolor saepe inventore,
                 soluta id accusantium voluptas beatae.
            </Body2>
            <Body2 fontWeight="regular">Body 2. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate aliquid ad quas sunt voluptatum officia dolorum cumque,
                possimus nihil molestias sapiente necessitatibus dolor saepe inventore,
                 soluta id accusantium voluptas beatae.
            </Body2>
            <Body2 fontWeight="medium">Body 2. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate aliquid ad quas sunt voluptatum officia dolorum cumque,
                possimus nihil molestias sapiente necessitatibus dolor saepe inventore,
                 soluta id accusantium voluptas beatae.
            </Body2>
            <Body2 fontWeight="bold">Body 2. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate aliquid ad quas sunt voluptatum officia dolorum cumque,
                possimus nihil molestias sapiente necessitatibus dolor saepe inventore,
                 soluta id accusantium voluptas beatae.
            </Body2>
            <Body2 fontWeight="black">Body 2. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate aliquid ad quas sunt voluptatum officia dolorum cumque,
                possimus nihil molestias sapiente necessitatibus dolor saepe inventore,
                 soluta id accusantium voluptas beatae.
            </Body2>
            <Body2 fontFamily="sansSerif">Body 2. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate aliquid ad quas sunt voluptatum officia dolorum cumque,
                possimus nihil molestias sapiente necessitatibus dolor saepe inventore,
                 soluta id accusantium voluptas beatae.
            </Body2>
            <Body2 fontFamily="serif">Body 2. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate aliquid ad quas sunt voluptatum officia dolorum cumque,
                possimus nihil molestias sapiente necessitatibus dolor saepe inventore,
                 soluta id accusantium voluptas beatae.
            </Body2>
            <Body2 fontFamily="monospace">Body 2. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate aliquid ad quas sunt voluptatum officia dolorum cumque,
                possimus nihil molestias sapiente necessitatibus dolor saepe inventore,
                 soluta id accusantium voluptas beatae.
            </Body2>
            <Body2 noWrap>Body 2. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate aliquid ad quas sunt voluptatum officia dolorum cumque,
                possimus nihil molestias sapiente necessitatibus dolor saepe inventore,
                 soluta id accusantium voluptas beatae.
            </Body2>
            <Body2 paragraph>Body 2. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate aliquid ad quas sunt voluptatum officia dolorum cumque,
                possimus nihil molestias sapiente necessitatibus dolor saepe inventore,
                 soluta id accusantium voluptas beatae.
            </Body2>
            <Body2 gutterBottom>Body 2. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate aliquid ad quas sunt voluptatum officia dolorum cumque,
                possimus nihil molestias sapiente necessitatibus dolor saepe inventore,
                 soluta id accusantium voluptas beatae.
            </Body2>
            <Body2 underlined >Body 2. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate aliquid ad quas sunt voluptatum officia dolorum cumque,
                possimus nihil molestias sapiente necessitatibus dolor saepe inventore,
                 soluta id accusantium voluptas beatae.
            </Body2>
            <Body2 underlined >Body 2. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate aliquid ad quas sunt voluptatum officia dolorum cumque,
                possimus nihil molestias sapiente necessitatibus dolor saepe inventore,
                 soluta id accusantium voluptas beatae.
            </Body2>
            <Body2 semantic="strong" >Body 2. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate aliquid ad quas sunt voluptatum officia dolorum cumque,
                possimus nihil molestias sapiente necessitatibus dolor saepe inventore,
                 soluta id accusantium voluptas beatae.
            </Body2>
            <Body2 semantic="em" >Body 2. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate aliquid ad quas sunt voluptatum officia dolorum cumque,
                possimus nihil molestias sapiente necessitatibus dolor saepe inventore,
                 soluta id accusantium voluptas beatae.
            </Body2>
        </App.Content>
    </App.App>
);
