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
const OLetter = (props: any) => {
  const { nodes, materials } = useLoader(
    GLTFLoader,
    "models/letter_o.glb"
  ) as unknown as IGLTF;

  const oLetter = useMemo(() => {
    return nodes.o_hiRes.geometry.clone();
  }, [nodes]);

  const oMaterial = useMemo(() => {
    return materials.lambert_002.clone();
  }, [materials]);

  return (
    <mesh
      castShadow
      receiveShadow
      geometry={oLetter}
      scale={[0.3, 0.3, 0.3]}
      material={oMaterial}
      material-color={props.color}
      material-roughness={1}
      {...props}
      dispose={null}
    ></mesh>
  );
};

export default OLetter;
