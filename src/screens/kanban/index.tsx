import Demo from "../../a-demo";
import { useDocumentTitle } from "../../a-demo/ref";

export const KanbanScreen = () => {
  useDocumentTitle("看板", false);
  return (
    <div>
      <h1>Kanban</h1>
      <Demo />
    </div>
  );
};
