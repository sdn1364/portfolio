import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import Block from "./models/Blok";
import H from "./models/H";
import O from "./models/O";
import S from "./models/S";
import E from "./models/E";
import Y from "./models/Y";
import L from "./models/L";
import Triangle from "./models/Triangle";
import Dot from "./models/Dot";
import D from "./models/D";
import A from "./models/A";

interface MousePosition {
  x: number;
  y: number;
}

function MousePosition(): MousePosition {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return mousePosition;
}

const Scene = () => {
  const mousePosition = MousePosition();

  return (
    <div className="w-full h-screen relative">
      <div className="text-stone-200 absolute top-[5%] left-[8%] font-titillium font-bold text-9xl">
        Front-end
      </div>
      <div className="text-stone-200 absolute bottom-[8%] right-[8%] font-titillium font-bold text-9xl">
        Developer
      </div>
      <Canvas shadows>
        <Suspense fallback={null}>
          <ambientLight />
          <directionalLight intensity={4} />
          <group
            rotation={[
              0 - mousePosition.y / 10000,
              0 - mousePosition.x / 10000,
              0,
            ]}
          >
            <group
              scale={[0.4, 0.4, 0.4]}
              position={[-0.4, 0.8, 0]}
              rotation={[0, 0.6, 0]}
            >
              <group>
                <Block
                  rotation={[0, 0, 0]}
                  position={[0, 0, 0]}
                  color="#eab308"
                />
                <Block
                  rotation={[0, 1.56, 1.56]}
                  position={[2, 0, 0]}
                  color="#f43f5e"
                />
                <Block
                  rotation={[1.55, 1.55, 1.55]}
                  position={[-2, 0, 0]}
                  color="#8b5cf6"
                />
                <Block
                  rotation={[0, 1.66, 0]}
                  position={[0, -2, 0]}
                  color="#0ea5e9"
                />
                <Block
                  rotation={[0, 0, 0]}
                  position={[2, -2, 0]}
                  color="#fb923c"
                />
                <Block
                  rotation={[0, 1.55, 0]}
                  position={[4, -2, 0]}
                  color="#a3e635"
                />
                <Block
                  rotation={[0, 0, 0]}
                  position={[4, -4, 0]}
                  color="#ec4899"
                />
              </group>

              <group>
                <S
                  position={[-4.5, -0.3, 1.2]}
                  rotation={[1.6, 0, 1]}
                  scale={[0.27, 0.27, 0.27]}
                  color="#f8fafc"
                />
                <O
                  position={[-1.4, 3, -4]}
                  rotation={[-1.55, 0, -2.8]}
                  scale={[0.4, 0.6, 0.4]}
                  color="#f8fafc"
                />
                <H
                  position={[-1.7, 0.8, 1.9]}
                  rotation={[-1.55, 0, -3.6]}
                  scale={[0.27, 0.46, 0.27]}
                  color="#f8fafc"
                />
                <E
                  position={[-0.28, 1.61, 3.18]}
                  rotation={[1.61, 0, 1.1]}
                  scale={[0.25, 0.46, 0.25]}
                  color="#f8fafc"
                />
                <Y
                  position={[2.2, 0.21, 2.6]}
                  rotation={[1.6, -0.03, -0.07]}
                  scale={[0.25, 0.4, 0.25]}
                  color="#f8fafc"
                />
                <L
                  position={[4.94, 1.7, 2.8]}
                  scale={[0.3, 0.55, 0.3]}
                  rotation={[1.6, 0, 1.29]}
                  color="#f8fafc"
                />
                <D
                  position={[-3.5, -3.2, 0.8]}
                  scale={[0.24, 0.55, 0.24]}
                  rotation={[1.6, 0, 0.8]}
                  color="#f8fafc"
                />
                <E
                  position={[-2.5, -4.2, 2]}
                  scale={[0.23, 0.5, 0.23]}
                  rotation={[1.6, 0, 0.1]}
                  color="#f8fafc"
                />
                <L
                  position={[-1.9, -2.3, 3.6]}
                  scale={[0.22, 0.4, 0.22]}
                  rotation={[1.6, 0, 1.2]}
                  color="#f8fafc"
                />
                <S
                  position={[-0.2, -5.2, 2]}
                  scale={[0.25, 0.4, 0.25]}
                  rotation={[1.6, 0, 0.6]}
                  color="#f8fafc"
                />
                <H
                  position={[2.7, -6.5, 1.3]}
                  scale={[0.27, 0.45, 0.27]}
                  rotation={[1.6, 0, 0.3]}
                  color="#f8fafc"
                />
                <A
                  position={[3.9, -4, 3]}
                  scale={[0.27, 0.45, 0.27]}
                  rotation={[1.6, 0, 0.1]}
                  color="#f8fafc"
                />
                <D
                  position={[5.5, -5, 3.5]}
                  scale={[0.27, 0.45, 0.27]}
                  rotation={[1.6, 0, 1]}
                  color="#f8fafc"
                />
              </group>
              <group scale={[0.7, 0.7, 0.7]} position={[8, 2, 0]}>
                <Triangle
                  position={[16.5, 3.1, 0.68]}
                  scale={[0.5, 0.5, 0.5]}
                  rotation={[4.72, 3.26, 0.69]}
                  color="#4ade80"
                />
                <Triangle
                  scale={[0.5, -0.5, -0.5]}
                  position={[15.62, -0.5, -0.1]}
                  rotation={[4.72, 3.26, 0.69]}
                  color="#4ade80"
                />
              </group>
              <group
                scale={[0.2, 0.5, 0.2]}
                position={[-6, -5, 1.8]}
                rotation={[0.29, 1.31, 1.17]}
              >
                <Dot position={[0, 0, 3]} />
                <Dot position={[0, 0, 0]} />
                <Dot position={[0, 0, -3]} />
              </group>
            </group>
          </group>
          <Environment
            preset="sunset"
            blur={0.4}
            files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/potsdamer_platz_1k.hdr"
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene;
