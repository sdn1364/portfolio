import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { useMemo } from "react";
import * as THREE from "three";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader.js";

interface IGLTF extends GLTF {
  nodes: { [key: string]: THREE.Mesh };
  materials: { [key: string]: THREE.MeshStandardMaterial };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Triangle = (props: any) => {
  const { nodes, materials } = useLoader(
    GLTFLoader,
    "models/triangle.glb"
  ) as unknown as IGLTF;
  const block = useMemo(() => {
    return nodes.triangle_hiRes.geometry.clone();
  }, [nodes]);

  const objMaterial = useMemo(() => {
    return materials.lambert_001.clone();
  }, [materials]);

  return (
    <mesh
      castShadow
      receiveShadow
      geometry={block}
      scale={[0.3, 0.3, 0.3]}
      material={objMaterial}
      material-color={props.color}
      material-roughness={1}
      {...props}
      dispose={null}
    ></mesh>
  );
};

export default Triangle;
