import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-stores-levelshoes-header.html';
import body from '@/components/exact/en-sa-stores-levelshoes-body.html';
import footer from '@/components/exact/en-sa-stores-levelshoes-footer.html';
import inline from '@/components/exact/en-sa-stores-levelshoes.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} />;
}
