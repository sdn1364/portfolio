import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { useMemo } from "react";

const Blok = (props: any) => {
  const { nodes, materials } = useLoader(GLTFLoader, "models/blok.glb");
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

export default Blok;
