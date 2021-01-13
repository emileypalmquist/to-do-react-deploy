export const Item = ({ content, completed }) => {
  return (
    <tr>
      <td>{content}</td>
      <td>
        <input type="checkbox" defaultChecked={completed} />
      </td>
    </tr>
  );
};
