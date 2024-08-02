import { useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader.js";

interface IGLTF extends GLTF {
  nodes: { [key: string]: THREE.Mesh };
  materials: { [key: string]: THREE.MeshStandardMaterial };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Blok = (props: { color?: string; [key: string]: any }) => {
  const { nodes, materials } = useGLTF("models/blok.glb") as unknown as IGLTF;

  const block = useMemo(() => {
    return nodes.blok.geometry.clone();
  }, [nodes]);

  const objMaterial = useMemo(() => {
    return materials.lambert1.clone();
  }, [materials]);

  return (
    <mesh
      castShadow
      receiveShadow
      scale={[0.3, 0.3, 0.3]}
      material={objMaterial}
      material-color={props.color}
      material-roughness={1}
      {...props}
      dispose={null}
    >
      <meshBasicMaterial color={props.color} attach="material" />
      <primitive object={block} />
    </mesh>
  );
};

export default Blok;
