import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-stores-homecentre-header.html';
import body from '@/components/exact/en-sa-stores-homecentre-body.html';
import footer from '@/components/exact/en-sa-stores-homecentre-footer.html';
import inline from '@/components/exact/en-sa-stores-homecentre.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} />;
}
