import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-stores-mestores-header.html';
import body from '@/components/exact/en-sa-stores-mestores-body.html';
import footer from '@/components/exact/en-sa-stores-mestores-footer.html';
import inline from '@/components/exact/en-sa-stores-mestores.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} />;
}
