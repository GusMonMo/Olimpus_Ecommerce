import { xanh_mono } from "./fonts";
type LogoProps = {
    height: string;
    width: string;
    fontSize: string;
    fontColor: string;
  };
 export default function Logo({ height, width, fontSize, fontColor }: LogoProps){
    return (
        <div className="logo" style={{fontSize: fontSize, color: fontColor }}>
            <div className="OlimpusIcon" style={{height: height, width: width}}/>
            <h2 className={xanh_mono.className}>OLIMPUS</h2>
        </div>
    )
 }