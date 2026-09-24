import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-stores-kiabi-header.html';
import body from '@/components/exact/en-sa-stores-kiabi-body.html';
import footer from '@/components/exact/en-sa-stores-kiabi-footer.html';
import inline from '@/components/exact/en-sa-stores-kiabi.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} />;
}
