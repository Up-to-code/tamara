import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-stores-mrsool-header.html';
import body from '@/components/exact/en-sa-stores-mrsool-body.html';
import footer from '@/components/exact/en-sa-stores-mrsool-footer.html';
import inline from '@/components/exact/en-sa-stores-mrsool.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} />;
}
