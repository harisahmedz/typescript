import Child from "@/components/childrenParent/Child";
import Parent from "@/components/childrenParent/Parent";
import Second from "@/components/childrenParent/Second";

export default function Page() {
  return (
    <div>
        <Parent>
            <Child/>
            <Second/>
        </Parent>
    </div>
  );
}
