import { useLoader } from "@react-three/fiber";
import { useMemo } from "react";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import * as THREE from "three";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader.js";

interface IGLTF extends GLTF {
  nodes: { [key: string]: THREE.Mesh };
  materials: { [key: string]: THREE.MeshStandardMaterial };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const LLetter = (props: any) => {
  const { nodes, materials } = useLoader(
    GLTFLoader,
    "models/letter_l.glb"
  ) as unknown as IGLTF;
  const letter = useMemo(() => {
    return nodes.L_hiRes.geometry.clone();
  }, [nodes]);

  const sMaterial = useMemo(() => {
    return materials.lambert_001.clone();
  }, [materials]);

  return (
    <mesh
      castShadow
      receiveShadow
      geometry={letter}
      scale={[0.3, 0.3, 0.3]}
      material={sMaterial}
      material-color={props.color}
      material-roughness={1}
      {...props}
      dispose={null}
    ></mesh>
  );
};

export default LLetter;
