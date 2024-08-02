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
const Dot = (props: any) => {
  const { nodes, materials } = useLoader(
    GLTFLoader,
    "models/dot.glb"
  ) as unknown as IGLTF;
  const dot = useMemo(() => {
    return nodes.dot_hiRes.geometry.clone();
  }, [nodes]);

  const dotMaterial = useMemo(() => {
    return materials.lambert.clone();
  }, [materials]);

  return (
    <mesh
      castShadow
      receiveShadow
      geometry={dot}
      scale={[0.3, 0.3, 0.3]}
      material={dotMaterial}
      material-color="#737373"
      material-roughness={1}
      {...props}
      dispose={null}
    />
  );
};

export default Dot;
