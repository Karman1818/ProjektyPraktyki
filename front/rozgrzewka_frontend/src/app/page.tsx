import {Button} from "@/app/ui/Button";


export default function Home() {
  return (
      <>
          <h1 className={"text-center text-xl mt-2 mb-8"}>Button variants</h1>
          <div className={"text-center"}>
              <h3  className={"my-3"} >Flavours</h3>
              <Button flavours={"primary"}>Primary</Button>
              <Button flavours={"success"}>Success</Button>
              <Button flavours={"warning"}>Warning</Button>
              <Button flavours={"danger"}>Danger</Button>
              <Button flavours={"inverse"}>Inverse</Button>
              <Button flavours={"purple"}>Purple</Button>
          </div>
          <div className={"text-center"}>
              <h3  className={"my-3"}>Sizes</h3>
              <Button flavours={"primary"} sizes={"small"}>Small</Button>
              <Button flavours={"success"} sizes={"medium"}>Medium</Button>
              <Button flavours={"warning"} sizes={"large"}>Large</Button>
              <Button flavours={"danger"} sizes={"extraLarge"} >Extra Large</Button>
          </div>
          <div className={"text-center"}>
              <h3 className={"my-3"}>Roundness</h3>
              <Button flavours={"primary"} sizes={"medium"} roundness={"square"} >Square</Button>
              <Button flavours={"success"} sizes={"medium"} roundness={"small"}>Small</Button>
              <Button flavours={"warning"} sizes={"medium"} roundness={"base"}>Base</Button>
              <Button flavours={"danger"} sizes={"medium"} roundness={"medium"}>Medium</Button>
              <Button flavours={"inverse"} sizes={"medium"} roundness={"large"}>Large</Button>
              <Button flavours={"purple"} sizes={"medium"} roundness={"extraLarge"}>XL</Button>
              <Button flavours={"primary"} sizes={"medium"} roundness={"doubleExtraLarge"}>2XL</Button>
              <Button flavours={"success"} sizes={"medium"} roundness={"circular"}>Circular</Button>
          </div>
      </>
  );

}
