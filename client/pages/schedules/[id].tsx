import { GetStaticPaths, GetStaticProps } from "next";

export default function schedulesDetail() {
    return (
        <div>

        </div>
    );
}

export const getStaticPath: GetStaticPaths = async (context) => {
    
    return {paths:[], fallback: true}
}

export const getStaticProps: GetStaticProps = async (context) => {
    const id = context.params?.id;
    const res = await fetch(
        `http://localhost:4000/api/tour_schedule/details/${id}`,
        {
          headers: {
            'Content-Type':'application/json'
          },
          method: 'GET'
        }
    );

    console.log(res);

    return {
        props: res
    }
}