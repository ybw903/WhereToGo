import Document, { Html, Head, Main, NextScript } from 'next/document'
import { kakaoKey } from '../apiKey'

class MyDocument extends Document {

  render() {
    return (
      <Html>
        <Head>
            <script
            type="text/javascript"
            src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${kakaoKey}`}
            />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument