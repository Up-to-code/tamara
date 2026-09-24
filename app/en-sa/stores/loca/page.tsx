import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-stores-loca-header.html';
import body from '@/components/exact/en-sa-stores-loca-body.html';
import footer from '@/components/exact/en-sa-stores-loca-footer.html';
import inline from '@/components/exact/en-sa-stores-loca.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} />;
}
